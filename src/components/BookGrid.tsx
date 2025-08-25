import { BookCard, Book } from "./BookCard";
import { useToast } from "@/hooks/use-toast";

const mockBooks: Book[] = [
  {
    id: "1",
    title: "Advanced Mathematics for Engineers",
    author: "Dr. Sarah Johnson",
    subject: "Mathematics",
    rating: 4.8,
    readTime: "6 hours",
    coverColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    isFavorite: true,
    isDownloaded: false,
  },
  {
    id: "2",
    title: "Introduction to Computer Science",
    author: "Prof. Michael Chen",
    subject: "Computer Science",
    rating: 4.9,
    readTime: "8 hours",
    coverColor: "bg-gradient-to-br from-purple-600 to-purple-800",
    isFavorite: false,
    isDownloaded: true,
  },
  {
    id: "3",
    title: "Organic Chemistry Principles",
    author: "Dr. Emily Rodriguez",
    subject: "Chemistry",
    rating: 4.7,
    readTime: "10 hours",
    coverColor: "bg-gradient-to-br from-green-600 to-green-800",
    isFavorite: false,
    isDownloaded: false,
  },
  {
    id: "4",
    title: "Modern Physics and Quantum Mechanics",
    author: "Prof. David Kim",
    subject: "Physics",
    rating: 4.6,
    readTime: "12 hours",
    coverColor: "bg-gradient-to-br from-indigo-600 to-indigo-800",
    isFavorite: true,
    isDownloaded: false,
  },
  {
    id: "5",
    title: "World History: Ancient Civilizations",
    author: "Dr. Maria Gonzalez",
    subject: "History",
    rating: 4.5,
    readTime: "7 hours",
    coverColor: "bg-gradient-to-br from-amber-600 to-amber-800",
    isFavorite: false,
    isDownloaded: true,
  },
  {
    id: "6",
    title: "Advanced Calculus and Analysis",
    author: "Prof. Robert Thompson",
    subject: "Mathematics",
    rating: 4.8,
    readTime: "9 hours",
    coverColor: "bg-gradient-to-br from-red-600 to-red-800",
    isFavorite: false,
    isDownloaded: false,
  },
  {
    id: "7",
    title: "Digital Signal Processing",
    author: "Dr. Lisa Wang",
    subject: "Engineering",
    rating: 4.7,
    readTime: "11 hours",
    coverColor: "bg-gradient-to-br from-teal-600 to-teal-800",
    isFavorite: true,
    isDownloaded: false,
  },
  {
    id: "8",
    title: "Molecular Biology Fundamentals",
    author: "Prof. James Wilson",
    subject: "Biology",
    rating: 4.9,
    readTime: "8 hours",
    coverColor: "bg-gradient-to-br from-emerald-600 to-emerald-800",
    isFavorite: false,
    isDownloaded: false,
  },
];

export function BookGrid() {
  const { toast } = useToast();

  const handleFavorite = (bookId: string) => {
    toast({
      title: "Added to Favorites",
      description: "Book has been added to your favorites list.",
    });
  };

  const handleDownload = (bookId: string) => {
    toast({
      title: "Download Started",
      description: "Your book is being downloaded for offline reading.",
    });
  };

  const handleOpenBook = (bookId: string) => {
    toast({
      title: "Opening Book",
      description: "Redirecting to book reader...",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
          Featured Books
        </h2>
        <p className="text-muted-foreground">
          Discover our curated collection of academic resources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockBooks.map((book, index) => (
          <div 
            key={book.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <BookCard
              book={book}
              onFavorite={handleFavorite}
              onDownload={handleDownload}
              onOpen={handleOpenBook}
            />
          </div>
        ))}
      </div>
    </div>
  );
}