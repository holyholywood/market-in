"use client";
import React, { useState } from "react";
import ToggleNumber from "../atoms/ToggleNumber";
import { HiOutlinePencil } from "react-icons/hi";
import { formatCurrency } from "@/lib/helpers/number";
const CheckoutPanel = ({
  stock,
  price,
  currentPrice,
}: {
  stock: number;
  price: number;
  currentPrice: number;
}) => {
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  return (
    <div>
      <div className="text-lg font-bold mb-4">Atur jumlah pesanan</div>
      <div className="flex items-center gap-4">
        <ToggleNumber stock={stock} />
        <div>
          Stok Total: <span className="font-bold">{stock}</span>
        </div>
      </div>
      <span className="text-xs">Max. pembelian {stock} pcs</span>
      <div className="pt-4 space-y-2">
        {isNoteOpen && (
          <input
            type="text"
            className="border px-4 py-2 rounded-lg bg-white/50 w-full"
            placeholder="Contoh: Warna Hijau, Ukuran S"
          />
        )}

        <button
          onClick={() => setIsNoteOpen(!isNoteOpen)}
          className="text-green-600 font-bold text-sm flex items-center gap-1"
        >
          {isNoteOpen ? (
            "Batalkan Catatan"
          ) : (
            <>
              <HiOutlinePencil className="text" /> Tambah Catatan
            </>
          )}
        </button>
      </div>
      <div className="flex justify-between">
        <div
          className="text-gray-600  self-end
        "
        >
          Subtotal
        </div>
        <div className="flex flex-col mt-8">
          <div className="line-through text-sm text-gray-400 self-end">
            {formatCurrency(price * 15000)}
          </div>
          <div className="text-xl font-bold mt-auto">{formatCurrency(currentPrice)}</div>
        </div>
      </div>
      <div className=" space-y-2 mt-8">
        <button className="bg-green-600 duration-500 hover:bg-green-700 w-full py-2 text-lg font-bold text-white rounded-lg">
          + Keranjang
        </button>
        <button className="border border-green-600 w-full py-2 text-lg font-bold text-green-600 rounded-lg">
          Beli Langsung
        </button>
      </div>
    </div>
  );
};

export default CheckoutPanel;
