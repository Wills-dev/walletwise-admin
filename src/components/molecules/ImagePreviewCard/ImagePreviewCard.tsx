"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye } from "lucide-react";

const ImagePreviewCard = ({
  title,
  imageUrl,
  icon,
}: {
  title: string;
  imageUrl: string;
  icon: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="border-border/50 dark:bg-gray-800 shadow-sm overflow-hidden group">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative aspect-video bg-muted">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              width={800}
              height={700}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setIsModalOpen(true)}
                className="gap-2"
              >
                <Eye className="w-4 h-4" />
                View
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => window.open(imageUrl, "_blank")}
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Simple Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="max-w-4xl w-full max-h-[90vh]  overflow-auto">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-auto rounded-lg"
              width={800}
              height={700}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePreviewCard;
