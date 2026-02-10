import { Column, JobApplication } from "@/lib/models/model.types";
import React from "react";

interface JobApplicationCardProps {
  job: JobApplication;
  columns: Column[];
}

export default function JobApplicationCard({
  job,
  columns,
}: JobApplicationCardProps) {
  return <div>JobApplicationCard</div>;
}
