'use client';

import { title } from "@/components/primitives";
import { Section } from "@/components/ui/section";
import { useEffect, useState } from "react";

export default function BlogPage() {

  const [blog, setBlog] = useState<any[]>([]);

  const getData = async () => {
    const data = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fidaamahboob/");
    const json = await data.json();
    const result = await json.items;
    setBlog(result)
    console.log(result);
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <Section>
      <h1 className={title()}>Blog</h1>
      <div>
        {blog.map(item => (
          <div key={item.link}>
            {/* <div>
              <img src={item.thumbnail} width='150px' height='150px' />
            </div> */}
            <div>
              <a href={item.link} target="_blank">{item.title}</a>
            </div>
            <div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

