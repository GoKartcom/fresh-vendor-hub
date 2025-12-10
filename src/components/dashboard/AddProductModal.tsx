import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Plus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  mrp: number;
  stock: number;
  unit: string;
  description: string;
  image: string;
  available: boolean;
  views: number;
  orders: number;
  availableFrom?: string;
  availableTo?: string;
}

interface AddProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddProduct: (product: Product) => void;
}

const categories = [
  "Vegetables",
  "Fruits",
  "Leafy Greens",
  "Dairy",
  "Grains & Pulses",
  "Spices",
  "Beverages",
  "Bakery",
  "Others",
];

const units = ["kg", "g", "pieces", "bunch", "litre", "ml", "dozen", "packet"];

export const AddProductModal = ({ open, onOpenChange, onAddProduct }: AddProductModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    unit: "",
    description: "",
    availableFrom: "09:00",
    availableTo: "21:00",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProduct: Product = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      mrp: parseFloat(formData.price) * 1.2,
      stock: parseInt(formData.stock),
      unit: formData.unit,
      description: formData.description,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop",
      available: true,
      views: 0,
      orders: 0,
      availableFrom: formData.availableFrom,
      availableTo: formData.availableTo,
    };

    onAddProduct(newProduct);
    setFormData({
      name: "",
      category: "",
      price: "",
      stock: "",
      unit: "",
      description: "",
      availableFrom: "09:00",
      availableTo: "21:00",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            Add New Product
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Product Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input
              id="name"
              placeholder="e.g., Fresh Tomatoes"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price and Stock Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price per Unit (₹) *</Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g., 40"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock Quantity *</Label>
              <Input
                id="stock"
                type="number"
                min="0"
                placeholder="e.g., 50"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Unit */}
          <div className="space-y-2">
            <Label htmlFor="unit">Unit *</Label>
            <Select
              value={formData.unit}
              onValueChange={(value) => setFormData({ ...formData, unit: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Product Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your product, its benefits, storage tips..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>

          {/* Timings */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              Availability Timings
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="availableFrom" className="text-xs text-muted-foreground">
                  From
                </Label>
                <Input
                  id="availableFrom"
                  type="time"
                  value={formData.availableFrom}
                  onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="availableTo" className="text-xs text-muted-foreground">
                  To
                </Label>
                <Input
                  id="availableTo"
                  type="time"
                  value={formData.availableTo}
                  onChange={(e) => setFormData({ ...formData, availableTo: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
