"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar({
  url,
  placeholder,
}: {
  url: string;
  placeholder?: string;
}) {
  const [SearchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (SearchText.trim()) {
      router.push(`${url}?q=${encodeURIComponent(SearchText.trim())}`);
    } else {
      router.push(`${url}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-row gap-2">
      <Input
        type="text"
        placeholder={placeholder}
        className="outline-8 border-accent"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button type="submit" variant="ghost">
        <LucideSearch />
      </Button>
    </form>
  );
}
