
import Container from "../Container";
import Heading from "../Heading";


const Checkout = () => {
  return (
    <Container>
      <div className="py-28">
        <Heading
          className="text-primary text-5xl font-bold font-dmSans"
          text={"Checkout"}
          as={"h3"}
        />
        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-2"
          text={"Home  >  Checkout"}
          as={"h4"}
        />
      </div>
      <div className="mt-2 flex gap-x-1">
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
      <Heading
        className="text-primary text-[39px] font-bold font-dmSans mt-20"
        text={"Billing Details"}
        as={"h3"}
      />
      <div className="mt-10 flex gap-x-100">
        <div className="">
          <Heading
            className="text-primary text-base font-bold font-dmSans mt-2"
            text={"First Name *"}
            as={"h4"}
          />
          <input
            className="outline-0 w-[300px] mt-2 text-[#767676] font-dmSans text-sm"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="">
          <Heading
            className="text-primary text-base font-bold font-dmSans mt-2"
            text={"Last Name *"}
            as={"h4"}
          />
          <input
            className="outline-0 w-[300px] mt-2 text-[#767676] font-dmSans text-sm"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="my-10">
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Companye Name (optional)"}
          as={"h4"}
        />
        <input
          className="outline-0 w-[300px]  mt-2 text-[#767676] font-dmSans text-sm"
          type="text"
          placeholder="Company Name"
        />
      </div>
      <div className="">
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Country *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-[300px]  mt-2 text-[#767676] font-dmSans text-sm"
          type="text"
          placeholder="Please select"
        />
      </div>
      <div className="my-10">
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Street Address *"}
          as={"h4"}
        />
        <div className="mb-7">
          <input
            className="outline-0 w-[300px]  mt-2 text-[#767676] font-dmSans text-sm"
            type="text"
            placeholder="House number and street name"
          />
        </div>
        <input
          className="outline-0 w-[300px] mt-2 text-[#767676] font-dmSans text-sm"
          type="text"
          placeholder="Apartment, suite, unit etc. (optional)"
        />
      </div>
      <div className="">
        <Heading
          className="text-primary text-base font-bold font-dmSans mt-2"
          text={"Town/City *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-[300px] mt-2 text-[#767676] font-dmSans text-sm"
          type="text"
          placeholder="Town/City"
        />
      </div>
      <div className="my-10">
        <Heading
          className="text-primary text-base font-bold font-dmSans mt-2"
          text={"County (optional)"}
          as={"h4"}
        />
        <input
          className="outline-0 w-[300px] mt-2 text-[#767676] font-dmSans text-sm"
          type="text"
          placeholder="County"
        />
      </div>
      <div className="">
        <Heading
          className="text-primary text-base font-bold font-dmSans mt-2"
          text={"Post Code *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-[300px] mt-2 text-[#767676] font-dmSans text-sm"
          type="text"
          placeholder="Post Code"
        />
      </div>
      <div className="my-10">
        <Heading
          className="text-primary text-base font-bold font-dmSans mt-2"
          text={"Phone *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-[300px] mt-2 text-[#767676] font-dmSans text-sm"
          type="number"
          placeholder="Phone"
        />
      </div>
      <div className="">
        <Heading
          className="text-primary text-base font-bold font-dmSans mt-2"
          text={"Email Address *"}
          as={"h4"}
        />
        <input
          className="outline-0 w-[300px] mt-2 text-[#767676] font-dmSans text-sm"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mt-10">
        <Heading
          className="text-primary text-[39px] font-bold font-dmSans"
          text={"Additional Information"}
          as={"h3"}
        />
        <Heading
          className="text-primary text-base font-bold font-dmSans mt-7"
          text={"Other Notes (optional)"}
          as={"h4"}
        />
        <Heading
          className="text-[#767676] text-sm  font-dmSans mt-2"
          text={"Notes about your order, e.g. special notes for delivery."}
          as={"h4"}
        />
      </div>
      <div className="mt-20">
        <Heading
          className="text-primary text-[39px] font-bold font-dmSans"
          text={"Your Order"}
          as={"h3"}
        />
      </div>
      <div className="flex gap-x-50">
        <Heading
          className="text-primary text-base font-bold  font-dmSans mt-10"
          text={"Product"}
          as={"h4"}
        />
        <Heading
          className="text-[#767676] text-base  font-dmSans mt-10"
          text={"Total"}
          as={"h4"}
        />
      </div>
      <div className="flex gap-x-32">
        <Heading
          className="text-primary text-base font-bold  font-dmSans mt-10"
          text={"Product name x 1"}
          as={"h4"}
        />
        <Heading
          className="text-[#767676] text-base  font-dmSans mt-10"
          text={"389.99 $"}
          as={"h4"}
        />
      </div>
      <div className="flex gap-x-49">
        <Heading
          className="text-primary text-base font-bold  font-dmSans mt-10"
          text={"Subtotal"}
          as={"h4"}
        />
        <Heading
          className="text-primary text-base  font-dmSans mt-10"
          text={"389.99 $"}
          as={"h4"}
        />
      </div>
      <div className="flex gap-x-56">
        <Heading
          className="text-primary text-base font-bold  font-dmSans mt-10"
          text={"Total"}
          as={"h4"}
        />
        <Heading
          className="text-primary text-base  font-dmSans mt-10"
          text={"389.99 $"}
          as={"h4"}
        />
      </div>
      <div className="flex gap-x-1 mt-20">
        <input type="radio" name="a" />
        <Heading
          className="text-primary text-base font-bold  font-dmSans"
          text={"Black"}
          as={"h4"}
        />
      </div>
      <Heading
        className="text-[#767676] text-sm font-dmSans ml-5 mt-10"
        text={
          "Pay via Bank; you can pay with your credit card if you don’t have a Bank account."
        }
        as={"p"}
      />
      <div className="flex gap-x-1 mt-20">
        <input type="radio" name="a" />
        <Heading
          className="text-primary text-base font-bold  font-dmSans"
          text={"Bank 2"}
          as={"h4"}
        />
      </div>
      <Heading
        className="text-[#767676] text-sm font-dmSans w-[875px] leading-7 mt-10"
        text={
          "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."
        }
        as={"p"}
      />
      <button className=" py-4 px-6 bg-primary text-white text-sm font-bold font-dmSans mt-10 cursor-pointer hover:text-primary hover:bg-transparent duration-300">
        Proceed to Bank
      </button>
    </Container>
  );
};

export default Checkout;
