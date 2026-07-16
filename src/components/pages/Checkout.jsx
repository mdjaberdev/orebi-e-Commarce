import Container from "../Container";
import Heading from "../Heading";

const Checkout = () => {
  return (
    <Container>
      {/* Page Heading */}
      <div className="py-16 lg:py-28">
        <Heading
          className="text-primary text-4xl lg:text-5xl font-bold font-dmSans"
          text={"Checkout"}
          as={"h3"}
        />
        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-2"
          text={"Home > Checkout"}
          as={"h4"}
        />
      </div>

      {/* Coupon */}
      <div className="mt-2 flex flex-wrap gap-x-1">
        <Heading
          className="text-[#767676] text-[12px] font-dmSans"
          text={"Have a coupon?"}
          as={"p"}
        />
        <Heading
          className="text-primary text-[12px] font-dmSans"
          text={" Click here to enter your code"}
          as={"p"}
        />
      </div>

      {/* Billing */}
      <Heading
        className="text-primary text-3xl lg:text-[39px] font-bold font-dmSans mt-14 lg:mt-20"
        text={"Billing Details"}
        as={"h3"}
      />

      {/* First & Last Name */}
      <div className="mt-10 flex flex-col sm:flex-row gap-8 lg:gap-x-100">
        <div className="w-full sm:w-1/2 lg:w-auto">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"First Name *"}
            as={"h4"}
          />
          <input
            className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div className="w-full sm:w-1/2 lg:w-auto">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"Last Name *"}
            as={"h4"}
          />
          <input
            className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>

      {/* Company */}
      <div className="my-10">
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Companye Name (optional)"}
          as={"h4"}
        />
        <input
          className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
          type="text"
          placeholder="Company Name"
        />
      </div>

      {/* Country */}
      <div>
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Country *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
          type="text"
          placeholder="Please select"
        />
      </div>

      {/* Address */}
      <div className="my-10">
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Street Address *"}
          as={"h4"}
        />

        <div className="mb-7">
          <input
            className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
            type="text"
            placeholder="House number and street name"
          />
        </div>

        <input
          className="outline-0 w-full lg:w-[300px] text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
          type="text"
          placeholder="Apartment, suite, unit etc. (optional)"
        />
      </div>

      {/* City */}
      <div>
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Town/City *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
          type="text"
          placeholder="Town/City"
        />
      </div>

      {/* County */}
      <div className="my-10">
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"County (optional)"}
          as={"h4"}
        />
        <input
          className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
          type="text"
          placeholder="County"
        />
      </div>

      {/* Post Code */}
      <div>
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Post Code *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
          type="text"
          placeholder="Post Code"
        />
      </div>

      {/* Phone */}
      <div className="my-10">
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Phone *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* Email */}
      <div>
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Email Address *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-full lg:w-[300px] mt-2 text-[#767676] font-dmSans text-sm border-b border-gray-300 pb-2"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mt-10">
        <Heading
          className="text-primary text-3xl lg:text-[39px] font-bold font-dmSans"
          text={"Additional Information"}
          as={"h3"}
        />

        <Heading
          className="text-primary text-base font-bold font-dmSans mt-7"
          text={"Other Notes (optional)"}
          as={"h4"}
        />

        <Heading
          className="text-[#767676] text-sm font-dmSans mt-2"
          text={"Notes about your order, e.g. special notes for delivery."}
          as={"h4"}
        />

        <textarea
          rows={5}
          className="w-full lg:w-[600px] border border-[#E5E5E5] outline-0 mt-5 p-4 text-sm font-dmSans resize-none"
          placeholder="Write your notes..."
        />
      </div>

      {/* Your Order */}
      <div className="mt-20">
        <Heading
          className="text-primary text-3xl lg:text-[39px] font-bold font-dmSans"
          text={"Your Order"}
          as={"h3"}
        />
      </div>

      {/* Desktop Order */}
      <div className="hidden lg:block">
        <div className="flex gap-x-50">
          <Heading
            className="text-primary text-base font-bold font-dmSans mt-10"
            text={"Product"}
            as={"h4"}
          />
          <Heading
            className="text-[#767676] text-base font-dmSans mt-10"
            text={"Total"}
            as={"h4"}
          />
        </div>

        <div className="flex gap-x-32">
          <Heading
            className="text-primary text-base font-bold font-dmSans mt-10"
            text={"Product name x 1"}
            as={"h4"}
          />
          <Heading
            className="text-[#767676] text-base font-dmSans mt-10"
            text={"389.99 $"}
            as={"h4"}
          />
        </div>

        <div className="flex gap-x-49">
          <Heading
            className="text-primary text-base font-bold font-dmSans mt-10"
            text={"Subtotal"}
            as={"h4"}
          />
          <Heading
            className="text-primary text-base font-dmSans mt-10"
            text={"389.99 $"}
            as={"h4"}
          />
        </div>

        <div className="flex gap-x-56">
          <Heading
            className="text-primary text-base font-bold font-dmSans mt-10"
            text={"Total"}
            as={"h4"}
          />
          <Heading
            className="text-primary text-base font-dmSans mt-10"
            text={"389.99 $"}
            as={"h4"}
          />
        </div>
      </div>

      {/* Mobile & Tablet Order */}
      <div className="lg:hidden border border-[#E5E5E5] mt-10">
        <div className="flex justify-between p-4 border-b">
          <span className="font-bold">Product</span>
          <span>Product name × 1</span>
        </div>

        <div className="flex justify-between p-4 border-b">
          <span className="font-bold">Subtotal</span>
          <span>389.99 $</span>
        </div>

        <div className="flex justify-between p-4">
          <span className="font-bold">Total</span>
          <span>389.99 $</span>
        </div>
      </div>
      {/* Payment Method */}
      <div className="mt-20">
        <div className="flex gap-x-2 items-center">
          <input type="radio" name="payment" />

          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"Bank"}
            as={"h4"}
          />
        </div>

        <Heading
          className="text-[#767676] text-sm font-dmSans ml-5 mt-8 leading-7"
          text={
            "Pay via Bank; you can pay with your credit card if you don't have a Bank account."
          }
          as={"p"}
        />

        <div className="flex gap-x-2 items-center mt-12">
          <input type="radio" name="payment" />

          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"Bank 2"}
            as={"h4"}
          />
        </div>

        <Heading
          className="text-[#767676] text-sm font-dmSans w-full lg:w-[875px] leading-7 mt-10"
          text={
            "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."
          }
          as={"p"}
        />

        <button className="py-4 px-6 bg-primary text-white text-sm font-bold font-dmSans mt-10 cursor-pointer hover:text-primary hover:bg-transparent border border-primary duration-300">
          Proceed to Bank
        </button>
      </div>
    </Container>
  );
};

export default Checkout;
