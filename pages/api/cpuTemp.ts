// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  temp: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ip = req.query.ip as string;

  try {
  await fetch(`http://${ip}:61208/api/3/sensors`)
    .then((res) => res.json())
    .then((json) => {
      const temp = json[0].value;
      res.status(200).json({ temp: temp });
      res.end();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ temp: "error" });
    res.end();
  }

}
