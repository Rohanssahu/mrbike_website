"use client";

import { Check, Link2, MessageCircle, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
  url: string;
}

/** Share an article via the native share sheet (where supported), WhatsApp, or a copied link. */
export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  // Starts false to match the server render, then reflects real support post-mount — avoids a hydration mismatch from feature-detecting `navigator` during render.
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && "share" in navigator);
  }, []);

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      await navigator.share({ title, url }).catch(() => {});
    }
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-muted-foreground text-sm font-medium">Share:</span>

      <Button
        size="sm"
        variant="outline"
        nativeButton={false}
        render={
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
      >
        <MessageCircle data-icon="inline-start" aria-hidden="true" />
        WhatsApp
      </Button>

      {canNativeShare && (
        <Button size="sm" variant="outline" onClick={handleNativeShare}>
          <Share2 data-icon="inline-start" aria-hidden="true" />
          Share
        </Button>
      )}

      <Button size="sm" variant="outline" onClick={handleCopyLink}>
        {copied ? (
          <Check data-icon="inline-start" aria-hidden="true" />
        ) : (
          <Link2 data-icon="inline-start" aria-hidden="true" />
        )}
        {copied ? "Copied" : "Copy Link"}
      </Button>
    </div>
  );
}
