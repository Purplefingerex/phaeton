import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  createUser,
  findUserByEmail,
  findServicesByUserId,
  updateGuestUser,
  removeUserByEmail,
} from '../services/users.service';
import 'dotenv/config';

// user registration
export const signUp = async (req, res) => {
  const { firstName, lastName, email, dateOfBirth, password, IsGuestUser } = req.body;
  try {
    const checkIfGuestUser = await findUserByEmail(email);
    if (checkIfGuestUser.IsGuestUser) {
      const passwordHash = await bcrypt.hash(password, 10);
      const updatedUser = await updateGuestUser({
        firstName,
        lastName,
        email,
        DateOfBirth: new Date(dateOfBirth),
        password: passwordHash,
        IsGuestUser: false,
      });

      res.status(201).json({
        message: 'User created.',
        user: updatedUser,
      });

      console.log('isguestuser true');
    } else {
      console.log('isguestuser false');
      const passwordHash = await bcrypt.hash(password, 10);
      const createdUser = await createUser({
        firstName,
        lastName,
        email,
        DateOfBirth: new Date(dateOfBirth),
        password: passwordHash,
        IsGuestUser,
      });

      res.status(201).json({
        message: 'User created.',
        user: createdUser,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: 'Failed to create user.',
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password, IsGuestUser } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: 'Failed to login.',
      error: 'Email or password is missing.',
    });
    return;
  }

  try {
    const user = await findUserByEmail(email, IsGuestUser); // getting the user from table by email

    if (!user) {
      res.status(401)({
        message: 'Failed to login.',
        error: 'Email is invalid.',
      });
    } else {
      const result = await bcrypt.compare(password, user.password); // true if password matching
      if (result) {
        // client gets user object without password
        delete user.password;

        const payload = {
          id: user.id,
          email: user.email,
          role: user.role,
          lastName: user.lastName,
          firstName: user.firstName,
          dateOfBirth: user.DateOfBirth,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' });

        res.status(200).json({
          message: 'Login successful',
          user,
          token,
        });
      } else {
        res.status(401).json({
          message: 'Failed to login.',
          error: 'Password is incorrect.',
        });
      }
    }
  } catch (err) {
    res.status(404).json({
      message: 'Failed to get user',
      error: err.message,
    });
  }
};

export const check = (req, res) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET);
    if (decoded) {
      res.status(201).json(decoded);
    }
  } catch (err) {
    res.status(400).json('GuestUser');
  }
};

export const list = async (req, res) => {
  const userId = req.body;
  try {
    const services = await findServicesByUserId(userId);
    res.status(200).json(services);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (user) {
      const deletedUser = await removeUserByEmail(user.email);
      res.status(201).json({
        message: 'User deleted.',
        user: deletedUser,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: 'Failed to delete user.',
      message: err.message,
    });
  }
};
