"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";

const CardImageCard = ({ imageUrl }: { imageUrl: string | null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!imageUrl) {
    return (
      <Card className="border-border/50 dark:bg-gray-800 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <ImagePlus className="w-5 h-5" />
            Card Image
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <ImagePlus className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No image uploaded</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="border-border/50 dark:bg-gray-800 shadow-sm overflow-hidden">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <ImagePlus className="w-5 h-5" />
            Card Image
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div
            className="relative aspect-video bg-muted group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src={imageUrl}
              width={500}
              height={500}
              alt="Gift Card"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Button size="sm" variant="secondary">
                View Full Size
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="max-w-4xl w-full max-h-[90vh] overflow-auto">
            <Image
              src={imageUrl}
              alt="Gift Card"
              width={700}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardImageCard;
