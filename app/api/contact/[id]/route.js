import dbConnect from '@/lib/dbConnect'; // assuming you have this utility
import Contact from '@/models/Contact'; // assuming you have a Contact model

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  if (method === 'PUT') {
    try {
      const contact = await Contact.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(contact);
    } catch (error) {
      res.status(400).json({ error: "Error updating contact" });
    }
  } else {
    res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
}