"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

type NotificationAlertProps = {
    successMessage?: string;
    deleteMessage?: string;
}

export function NotificationAlert({ successMessage, deleteMessage }: NotificationAlertProps) {
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get('success') === '1' && successMessage) {
            toast.success(successMessage);
        }

        if (searchParams.get('deleted') === '1' && deleteMessage) {
            toast.success(deleteMessage);
        }
    }, [searchParams]);

    return null;
}