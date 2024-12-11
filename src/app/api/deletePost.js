import { db } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { voiceId } = req.body;

    try {
      await db.query(`DELETE FROM voices WHERE voice_id = $1`, [voiceId]);
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({ error: "Failed to delete the post" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
