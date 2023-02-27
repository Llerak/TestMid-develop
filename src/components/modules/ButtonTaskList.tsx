import { ReactNode } from "react";

type ButtonTaskListProps = {
	children?: ReactNode;
	className?: string;
	id?: string;
	onClick?: any;
	Ref?: any;
};

const ButtonTaskList = ({
	children,
	className,
	id,
	onClick,
	Ref: reference,
}: ButtonTaskListProps) => {
	const style: string =
		"cursor-pointer flex items-center py-0.5 xl:px-4 pl-4 pr-2.5 border rounded-md m-0.5 h-8 text-sm font-mono bg-[#EAF0F5]";

	console.log();

	return (
		<div
			className={style + " " + className}
			id={id}
			onClick={onClick}
			ref={reference}
		>
			{children}
		</div>
	);
};

export default ButtonTaskList;
