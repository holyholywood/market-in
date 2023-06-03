"use client";
import { limitText } from "@/lib/helpers/string";
import React, { useMemo, useState } from "react";

type DetailProductDescriptionProps = {
  description: string;
};
const DetailProductDescription = ({ description }: DetailProductDescriptionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const limit = useMemo(() => 600, []);
  return (
    <div>
      <p>{limitText(description, isOpen ? description.length : limit)}</p>
      {description.length <= limit && !isOpen ? null : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-semibold text-green-600"
        >
          Tampilkan lebih {isOpen ? "sedikit" : "banyak"}
        </button>
      )}
    </div>
  );
};

export default DetailProductDescription;
