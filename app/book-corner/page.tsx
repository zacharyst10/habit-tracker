import React from "react";

const BookCorner = () => {
  const shelves = [
    {
      id: 1,
      books: [
        {
          id: 1,
          title: "The Great Gatsby",
          height: "h-32",
          spine: "bg-gradient-to-r from-stone-700 to-stone-600",
        },
        {
          id: 2,
          title: "1984",
          height: "h-28",
          spine: "bg-gradient-to-r from-neutral-800 to-neutral-700",
        },
        {
          id: 3,
          title: "Pride & Prejudice",
          height: "h-32",
          spine: "bg-gradient-to-r from-amber-900 to-amber-800",
        },
        {
          id: 4,
          title: "The Hobbit",
          height: "h-30",
          spine: "bg-gradient-to-r from-emerald-900 to-emerald-800",
        },
        {
          id: 5,
          title: "Dune",
          height: "h-28",
          spine: "bg-gradient-to-r from-orange-950 to-orange-900",
        },
      ],
    },
    {
      id: 2,
      books: [
        {
          id: 6,
          title: "Jane Eyre",
          height: "h-32",
          spine: "bg-gradient-to-r from-red-900 to-red-800",
        },
        {
          id: 7,
          title: "War & Peace",
          height: "h-28",
          spine: "bg-gradient-to-r from-slate-800 to-slate-700",
        },
        {
          id: 8,
          title: "Dracula",
          height: "h-30",
          spine: "bg-gradient-to-r from-stone-900 to-stone-800",
        },
        {
          id: 9,
          title: "Beloved",
          height: "h-32",
          spine: "bg-gradient-to-r from-rose-900 to-rose-800",
        },
      ],
    },
    {
      id: 3,
      books: [
        {
          id: 10,
          title: "Don Quixote",
          height: "h-28",
          spine: "bg-gradient-to-r from-yellow-900 to-yellow-800",
        },
        {
          id: 11,
          title: "Moby Dick",
          height: "h-32",
          spine: "bg-gradient-to-r from-blue-900 to-blue-800",
        },
        {
          id: 12,
          title: "Anna Karenina",
          height: "h-30",
          spine: "bg-gradient-to-r from-purple-900 to-purple-800",
        },
        {
          id: 13,
          title: "The Odyssey",
          height: "h-28",
          spine: "bg-gradient-to-r from-teal-900 to-teal-800",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 p-8 pb-20 gap-16 sm:p-20">
      {/* Main bookshelf container */}
      <div className="relative mx-auto">
        {/* Wood panel background with realistic texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-lg opacity-90 shadow-2xl">
          {/* Wood grain effect */}
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,#000_0px,transparent_2px,transparent_20px)]"></div>
        </div>

        {/* Bookshelves container */}
        <div className="relative p-8">
          {shelves.map((shelf) => (
            <div key={shelf.id} className="mb-16 last:mb-0">
              {/* Books row */}
              <div className="relative">
                <div className="flex justify-start gap-1">
                  {shelf.books.map((book) => (
                    <div
                      key={book.id}
                      className={`group relative ${book.height} w-12 transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer`}
                    >
                      {/* Book spine with realistic texture and lighting */}
                      <div
                        className={`absolute inset-0 ${book.spine} shadow-inner`}
                      >
                        {/* Leather texture effect */}
                        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#fff_0px,transparent_1px,transparent_3px)]"></div>
                        {/* Spine details */}
                        <div className="absolute inset-x-0 top-2 bottom-2 flex flex-col justify-between">
                          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                        </div>
                      </div>
                      {/* Book title on spine - now with correct rotation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 [writing-mode:vertical-lr] transform -rotate-180 whitespace-nowrap">
                            {book.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Wooden shelf with realistic texture */}
                <div className="h-6 mt-2 bg-gradient-to-b from-amber-950 to-amber-900 rounded-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),inset_0_2px_4px_0_rgba(255,255,255,0.1)]">
                  {/* Wood grain effect */}
                  <div className="h-full opacity-30 bg-[repeating-linear-gradient(90deg,#000_0px,transparent_2px,transparent_10px)]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCorner;
