"use client";

import { Board, Column } from "@/lib/models/model.types";
import { Award, Calendar, CheckCircle2, Mic, XCircle } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface KanbanBoardProps {
  board: Board;
  userId: string;
}

interface ColConfig {
  color: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<ColConfig> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-green-500",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="h-4 w-4" />,
  },
];

interface DroppableColumnProps {
  column: Column;
  boardId: string;
  config: ColConfig;
}

function DroppableColumn({ column, boardId, config }: DroppableColumnProps) {
  return (
    <Card>
      <CardHeader className={`${config.color}`}>
        <div>
          <div>
            {config.icon}
            <CardTitle>{column.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default function KanbanBoard({ board, userId }: KanbanBoardProps) {
  const columns = board.columns;
  return (
    <>
      <div>
        <div>
          {columns.map((column, key) => {
            const config = COLUMN_CONFIG[key] || {
              color: "bg-gray-500",
              icon: <Calendar className="h-4 w-4" />,
            };
            return (
              <DroppableColumn
                key={key}
                boardId={board._id}
                config={config}
                column={column}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
