'use client';

import { Card, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import React, { Suspense, useEffect, useState } from "react";

export default function BlogPage() {

  const [blog, setBlog] = useState<any[]>([]);

  const getData = async () => {
    const data = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fidaamahboob/");
    const json = await data.json();
    const result = await json.items;
    setBlog(result)
  };

  const convertDateFormat = (date: string): React.ReactNode => {
    const convertedDate = new Date(date);
    return <p className="italic">Published by Fidaa Mahboob on {convertedDate.toString().slice(0, 15)}</p>;
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Section>
        <Suspense fallback={<p className="text-xl text-black-400">Loading Blog post feed......</p>}>
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
              </CardHeader>
            </Card>
          ))}
        </Suspense>

      </Section>
    </div>
  );
}

