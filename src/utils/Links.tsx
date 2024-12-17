import { Github, ExternalLink } from "lucide-react";
import IconLink from "@/utils/IconLink";
const Links = ({
    links,
    children,
}: {
    links: { demo?: string; repo?: string };
    children?: React.ReactNode;
}) => {
    return (
        <div className="flex flex-row flex-wrap justify-end items-center gap-7">
            {links.demo && (
                <IconLink href={links.demo} title={"Demo Link"} target="_blank">
                    <ExternalLink />
                </IconLink>
            )}
            {links.repo && (
                <IconLink href={links.repo} title={"Repository Link"} target="_blank">
                    <Github />
                </IconLink>
            )}
            {children}
        </div>
    );
};
export default Links;