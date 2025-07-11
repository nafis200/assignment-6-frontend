"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Utensils, Tag } from "lucide-react";
// import { Utensils,Tag,Leaf, Star, } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";
import { ShoppingCart, Eye } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EachCard = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddProduct = (producted: any) => {
    dispatch(addProduct(producted));
  };

  const handleViewDetails = () => {
    router.push(`/mealcard/${product._id}`);
  };

  return (
    <Card
      key={product._id}
      className="w-full max-w-xs p-4 bg-background text-foreground shadow-md rounded-lg transition-all hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-700"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-md"
      />
      <CardContent className="pt-4">
        <h3 className="text-xl font-semibold flex items-center gap-2 text-bold dark:text-white">
          <Tag size={18} className="text-blue-500 dark:text-blue-400" />
          {product.name}
        </h3>
        <p className="text-muted-foreground flex items-center gap-2 dark:text-gray-300">
          <Utensils size={16} className="text-green-500 dark:text-green-400" /> {product.cuisine}
        </p>
        {/* <div className="mt-2">
          <p className="text-sm font-semibold flex items-center gap-2">
            <Leaf size={16} className="text-orange-500" /> Ingredients:
          </p>
          <p className="text-gray-600 text-sm">{product.ingredient.join(", ")}</p>
        </div>
        <div className="mt-2">
          <p className="text-sm font-semibold flex items-center gap-2">
            <Leaf size={16} className="text-red-500" /> Dietary Preferences:
          </p>
          <p className="text-gray-600 text-sm">{product.dietary_preferences.join(", ")}</p>
        </div>
        <div className="flex items-center mt-2">
          <Star size={18} fill="orange" stroke="orange" />
          <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
        </div> */}
        <p className="mt-2 font-semibold text-foreground dark:text-gray-100">${product.price.toFixed(2)}</p>
        <div className="mt-4 flex gap-3">
          <Button
            onClick={() => handleAddProduct(product)}
            className="flex-1 bg-blue-600 text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80 flex items-center justify-center gap-2 dark:text-white"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            onClick={handleViewDetails}
            className="flex-1 border-blue-600 text-blue-600 hover:bg-primary/10 dark:hover:bg-primary/20 flex items-center justify-center gap-2 dark:text-white"
          >
            <Eye size={16} />
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EachCard;
