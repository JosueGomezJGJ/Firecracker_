import { auth, currentUser } from "@clerk/nextjs/server";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { db } from "@/lib/db";

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export const CreateAuditLog = async (props: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!orgId || !user) throw new Error("User not found!");

    const { entityId, entityType, entityTitle, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityType,
        entityId,
        entityTitle,
        action,
        userId: user.id,
        userImage: user?.imageUrl,
        userName: user?.firstName + " " + user?.lastName,
      },
    });
  } catch (error) {
    console.error("[AUDIT_LOG_ERROR]", error);
  }
};
