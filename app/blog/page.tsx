'use client';

import { Card, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import React, { useEffect, useState } from "react";

export default function BlogPage() {

  const [blog, setBlog] = useState<any[]>([]);  

  const getData = async () => {
    const data = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fidaamahboob/");
    const json = await data.json();
    const result = await json.items;
    setBlog(result)
    console.log(result);
  };

  const convertDateFormat = (date: string) : React.ReactNode => {
    const convertedDate = new Date(date);
    return <p className="font-semibold">Published: &nbsp; {convertedDate.toString().slice(0, 15)}</p>; 
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog</h1>
      <Section>
        {blog.map(item => (
          <Card key={item.link} className="py-4">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-1 text-base">
                <h3 className="inline-flex items-center justify-center text-pretty gap-x-1 text-xl font-bold leading-none">
                  <a target="_blank" href={item.link}>
                    {item.title}
                  </a>
                </h3>
              </div>
              <div>
                {convertDateFormat(item.pubDate)}
              </div>
              <h4 className="font-mono text-md leading-none">
                by {item.author}
              </h4>
            </CardHeader>
          </Card>
        ))}
      </Section>
    </div>
  );
}

