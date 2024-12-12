"use server";

import { db } from "../utils/db";
import { revalidatePath } from "next/cache";

export async function deleteVoice(voiceId) {
  try {
    const result = await db.query(
      `DELETE FROM voices WHERE id = $1 RETURNING *`,
      [voiceId]
    );
    console.log("Delete result:", result);
    revalidatePath("/home");
    return result;
  } catch (error) {
    console.error("Failed to delete voice:", error);
  }
}
