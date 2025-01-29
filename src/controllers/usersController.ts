import { UserRepository } from "@repositories/userRepository";
import { UserService } from "@services/userService";
import { IUserRepository, IUserService, User } from "types/UserTypes";
import { Request, Response, RequestHandler } from "express";

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const findUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.findUsers();
    if (users.length === 0) return res.status(404).json({ message: 'No users found' });
    
    res.json(users);
  } catch (error) {
    console.log('error :>>', error);
    res.status(500).json(error);
  }
};

export const findUsersById = async (req: Request, res: Response) => {
  try {
    const users = await userService.findUsersById(req.params.id);
    if (!users) return res.status(404).json({ message: 'Not user found' });
    
    res.json(users);
  } catch (error) {
    console.log('error :>>', error);
    res.status(500).json(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser: User = req.body;
    const result = await userService.createUser(newUser);

    res.status(201).json(result);
  } catch (error) {
    console.log('error :>>', error);
    res.status(400).json(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.updateUser(req.params.id, req.body);
    if (!users) return res.status(404).json({ message: 'Not user found' });
    
    res.json(users);
  } catch (error) {
    console.log('error :>>', error);
    res.status(500).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.deleteUser(req.params.id);
    if (!users) return res.status(404).json({ message: 'Not user found' });
    
    res.json(users);
  } catch (error) {
    console.log('error :>>', error);
    res.status(500).json(error);
  }
};