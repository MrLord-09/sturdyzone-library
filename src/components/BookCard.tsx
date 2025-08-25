import { Heart, Download, Star, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Book {
  id: string;
  title: string;
  author: string;
  subject: string;
  rating: number;
  readTime: string;
  coverColor: string;
  isFavorite?: boolean;
  isDownloaded?: boolean;
}

interface BookCardProps {
  book: Book;
  onFavorite?: (bookId: string) => void;
  onDownload?: (bookId: string) => void;
  onOpen?: (bookId: string) => void;
}

export function BookCard({ book, onFavorite, onDownload, onOpen }: BookCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-hover animate-scale-in bg-gradient-card border-border/50">
      <CardContent className="p-0">
        {/* Book Cover */}
        <div className={cn(
          "h-48 relative flex items-center justify-center text-white font-display font-semibold text-lg transition-transform duration-300 group-hover:scale-105",
          book.coverColor
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
          <div className="relative z-10 text-center px-4">
            <h3 className="line-clamp-2">{book.title}</h3>
          </div>
          
          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                onFavorite?.(book.id);
              }}
            >
              <Heart className={cn(
                "h-4 w-4 transition-colors",
                book.isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
              )} />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                onDownload?.(book.id);
              }}
            >
              <Download className={cn(
                "h-4 w-4 transition-colors",
                book.isDownloaded ? "text-primary" : "text-muted-foreground"
              )} />
            </Button>
          </div>
        </div>

        {/* Book Info */}
        <div className="p-4 space-y-2">
          <div>
            <h4 className="font-semibold text-foreground line-clamp-1">{book.title}</h4>
            <p className="text-sm text-muted-foreground">by {book.author}</p>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="px-2 py-1 bg-muted rounded-md text-muted-foreground font-medium">
              {book.subject}
            </span>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span>{book.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{book.readTime}</span>
              </div>
            </div>
          </div>

          <Button 
            className="w-full mt-3 font-medium"
            onClick={() => onOpen?.(book.id)}
          >
            Open Book
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}