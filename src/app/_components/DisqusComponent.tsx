// Next.js, useInView and language option
// identifier - slug url from parent component, title - blog title name from parent component
"use client"
import { DiscussionEmbed } from 'disqus-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ICommentPprops {
    identifier: string;
    title: string;
}

const Comment = ({ identifier, title }: ICommentPprops) => {
    const router = useRouter();
    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true,
        fallbackInView: true,
    });

    return (
        <div className="pb-8 w-full rounded-3xl" ref={ref}>
            {inView ? (
                <DiscussionEmbed
                    shortname="DohitsGithubIo" // write in discuss as a Shortname
                    config={{
                        url: process.env.NEXT_PUBLIC_SITE_URL,
                        identifier: identifier, // 컴포넌트를 유니크하게 만들어주는 props _ slug 전달해서 사용
                        title: title,
                        language: "ko"
                    }}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default Comment;