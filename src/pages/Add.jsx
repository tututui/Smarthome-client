import { Input, Button, Card } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Add() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 px-6">
      <Card className="p-8 px-8 w-full max-w-md rounded-3xl shadow-lg ">
        <form className="flex flex-col gap-4">
          {/* ช่องกรอกชื่อ */}
          <div>

            <label className="block text-base font-bold text-gray-600 mb-2">
              Name
            </label>
            <Input
              clearable
              underlined
              fullWidth
              placeholder="Enter your name devices"
              aria-label="Name"
              className="bg-gray-100"
            />
        
          </div>

          {/* ช่องอัปโหลดรูปภาพ */}
          <div>
          
            <label className="block text-base font-bold text-gray-600 mb-2">
              Image
            </label>
            <Input
              type="file"
              fullWidth
              underlined
              aria-label="Upload Image"
              className="bg-gray-100"
            />
          </div>

          {/* ปุ่ม Create และ Cancel */}
          <div className="flex justify-between items-center">
            <Button
              color="primary"
              auto
              className="bg-black hover:bg-gray-800 text-white hover:bg-black-100"
            >
              Create
            </Button>
            <Button light color="error" auto>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
    
  );
}
