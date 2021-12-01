import dotenv from 'dotenv';
import axios from 'axios';
import { Response, Request } from 'express';

dotenv.config();

const { username, password, shop, apiversion, resource } = process.env;

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get(`https://${username}:${password}@${shop}.myshopify.com/admin/api/${apiversion}/${resource}.json`)

    res.status(200).json(response.data.products);
  } catch (error) {
    console.error(error);
  }
}