import React from "react";
import { FaRegHeart } from "react-icons/fa";
type Props = {
  className?: string;
};
export default function HeartIcon({ className }: Props) {
  return <FaRegHeart className={className || "w-7 h-7"} />;
}
