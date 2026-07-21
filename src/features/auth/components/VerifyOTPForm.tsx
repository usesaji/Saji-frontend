"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";

import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";

import {
	VerifyOtpSchema,
	VerifyOtpValues,
} from "@/lib/validations/authValidations";
import { toast } from "../../../lib/utils/toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { pageRoutes } from "../../../config/routes";

export default function VerifyOtpForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const form = useForm<VerifyOtpValues>({
		resolver: zodResolver(VerifyOtpSchema),
		mode: "onChange",
		defaultValues: {
			otp: "",
		},
	});

	const onSubmit = (values: VerifyOtpValues) => {
		console.log(values);

		setIsLoading(true);

		setTimeout(() => {
			toast.success("Your email has been verified", "Verification Successful");
			setIsLoading(false);
			router.push(pageRoutes.authRoutes.LOGIN);
		}, 2000);
	};

	const {
		formState: { isDirty, isSubmitting, isValid },
	} = form;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="otp"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<InputOTP maxLength={4} {...field}>
									<InputOTPGroup className="gap-3">
										<InputOTPSlot index={0} className="h-14 w-14 rounded-xl" />
										<InputOTPSlot index={1} className="h-14 w-14 rounded-xl" />
										<InputOTPSlot index={2} className="h-14 w-14 rounded-xl" />
										<InputOTPSlot index={3} className="h-14 w-14 rounded-xl" />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full"
					disabled={!isDirty || !isValid || isSubmitting}
					isLoading={isLoading}
				>
					Verify OTP
				</Button>
			</form>
		</Form>
	);
}
