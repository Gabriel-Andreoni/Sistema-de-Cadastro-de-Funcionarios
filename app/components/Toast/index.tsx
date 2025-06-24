"use client";

import toast from "react-hot-toast";

export function Toast(message:string) {
    return toast.success(message);
}