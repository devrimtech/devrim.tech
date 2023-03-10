import type { NextPage } from "next";
import Meta from "../components/meta/meta";
import Link from "next/link";
import redirect from 'nextjs-redirect'
const Redirect = redirect('/Resume.pdf')
const Resume: NextPage = () => {
    return (
        <>
            <Meta title="/resume" description="Direct download to my resume" />
            <main>
                <Redirect>
                    <ResumePage />
                </Redirect>
            </main>
        </>
    );
};

function ResumePage() {
    return (
        <div className="resume-root pages content">
            <Link
                href="/Resume.pdf"
            >Download Resume</Link>
        </div>
    );
}

export default Resume;
