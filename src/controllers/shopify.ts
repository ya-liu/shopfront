import dotenv from 'dotenv';
import { Response, Request } from 'express';

dotenv.config();

const { username, password, shop, apiversion, resource } = process.env;

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await fetch(`https://${username}:${password}@${shop}.myshopify.com/admin/api/${apiversion}/${resource}.json`)
    // console.log(products)
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
  }
}