import { UserRepository } from "@repositories/userRepository";
import { UserService } from "@services/userService";
import { Request, Response } from "express";
import { IUserRepository, IUserService, User } from "types/UserTypes";


const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {email}:User = req.body;
    const userExist = await userService.findUsersByEmail(email);

    if (userExist) return res.status(400).json({message: 'Email already exists.'});

    const newUser = await userService.createUser(req.body);
    
    res.status(201).json(newUser);
  } catch (error) {
    console.log('error :>>', error);
    res.status(500).json(error);
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const {email, password}:User = req.body;
    const user = await userService.findUsersByEmail(email);

    if (!user) return res.status(400).json({message: 'Invalid user or password.'});

    const comparePass = await user.comparePassword(password);
    if (!comparePass) return res.status(400).json({message: 'Invalid user or password.'});

    res.json(user);
  } catch (error) {
    console.log('error :>>', error);
    res.status(500).json(error);
  }
}