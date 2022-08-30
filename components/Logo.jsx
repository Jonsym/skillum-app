import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" passHref>
            <a className="flex items-center">
                <img
                    className="h-8 w-auto sm:h-10"
                    src="https://www.skillum.mx/images/Logo.png"
                    alt=""
                />
                <img
                    className="h-2 w-auto sm:h-4 pl-3"
                    src="https://www.skillum.mx/images/iso.png"
                    alt=""
                />
            </a>

        </Link>
    )
}
