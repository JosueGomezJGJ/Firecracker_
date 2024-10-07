"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    if (params.organizationId) {
      setActive({
        organization: params.organizationId as string,
      });
    } else {
    }
  }, [setActive, params.organizationId]);

  return null;
};
