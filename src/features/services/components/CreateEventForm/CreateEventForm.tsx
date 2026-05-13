"use client";

import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Textarea from "@/components/atoms/TextArea/Textarea";
import Button from "@/components/atoms/Button/Button";
import ImageUpload from "../ImageUpload/ImageUpload";

import { useCreateEvent } from "../../hooks/useCreateEvent";

const CreateEventForm = () => {
  const {
    form,
    isPending,
    handleChange,
    handleSubmit,
    handleTicketChange,
    image,
    setImage,
  } = useCreateEvent();

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-4xl bg-white dark:bg-gray-800 p-6 rounded-3xl"
    >
      <div className="gap-4 grid grid-col-1 sm:grid-cols-2">
        <div className="space-y-2">
          <Label title="Title" />
          <Input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label title="Date" />
            <Input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label title="Time" />
            <Input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label title="Address" />
          <Textarea
            rows={4}
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label title="Description" />
          <Textarea
            rows={4}
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label title="Promo" />
          <Input
            type="text"
            name="promo"
            value={form.promo}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label title="Free Quanity" />
          <Input
            type="text"
            name=""
            value={form?.ticket_types?.Free?.quantity || ""}
            onChange={(e) =>
              handleTicketChange("Free", "quantity", Number(e.target.value))
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label title="Regular price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Regular?.price || ""}
              onChange={(e) =>
                handleTicketChange("Regular", "price", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Quanity" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Regular?.quantity || ""}
              onChange={(e) =>
                handleTicketChange(
                  "Regular",
                  "quantity",
                  Number(e.target.value),
                )
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Discount price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Regular?.discountPrice || ""}
              onChange={(e) =>
                handleTicketChange(
                  "Regular",
                  "discountPrice",
                  Number(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label title="VIP price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.VIP?.price || ""}
              onChange={(e) =>
                handleTicketChange("VIP", "price", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Quanity" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.VIP?.quantity || ""}
              onChange={(e) =>
                handleTicketChange("VIP", "quantity", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Discount price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.VIP?.discountPrice || ""}
              onChange={(e) =>
                handleTicketChange(
                  "VIP",
                  "discountPrice",
                  Number(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label title="Table price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table?.price || ""}
              onChange={(e) =>
                handleTicketChange("Table", "price", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Quanity" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table?.quantity || ""}
              onChange={(e) =>
                handleTicketChange("Table", "quantity", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Discount price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table?.discountPrice || "0"}
              onChange={(e) =>
                handleTicketChange(
                  "Table",
                  "discountPrice",
                  Number(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label title="Table 6 price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table6?.price || ""}
              onChange={(e) =>
                handleTicketChange("Table6", "price", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Quanity" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table6?.quantity || ""}
              onChange={(e) =>
                handleTicketChange("Table6", "quantity", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Discount price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table6?.discountPrice || "0"}
              onChange={(e) =>
                handleTicketChange(
                  "Table6",
                  "discountPrice",
                  Number(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label title="Table 8 price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table8?.price || ""}
              onChange={(e) =>
                handleTicketChange("Table8", "price", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Quanity" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table8?.quantity || ""}
              onChange={(e) =>
                handleTicketChange("Table8", "quantity", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Discount price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table8?.discountPrice || "0"}
              onChange={(e) =>
                handleTicketChange(
                  "Table8",
                  "discountPrice",
                  Number(e.target.value),
                )
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label title="Table 10 price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table10?.price || ""}
              onChange={(e) =>
                handleTicketChange("Table10", "price", Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Quanity" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table10?.quantity || ""}
              onChange={(e) =>
                handleTicketChange(
                  "Table10",
                  "quantity",
                  Number(e.target.value),
                )
              }
            />
          </div>
          <div className="space-y-2">
            <Label title="Discount price" />
            <Input
              type="text"
              name=""
              value={form?.ticket_types?.Table10?.discountPrice || "0"}
              onChange={(e) =>
                handleTicketChange(
                  "Table10",
                  "discountPrice",
                  Number(e.target.value),
                )
              }
            />
          </div>
        </div>
        <ImageUpload image={image} setImage={setImage} />
      </div>
      <Button
        width="w-fit"
        type="submit"
        disabled={isPending}
        loading={isPending}
      >
        Submit
      </Button>
    </form>
  );
};

export default CreateEventForm;
