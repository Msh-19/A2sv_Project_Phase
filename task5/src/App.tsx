import { Controller, useForm } from "react-hook-form";
import IconInfo from "./component/iconInfo";
import IconEmail from "./icons/iconEmail";
import IconPhone from "./icons/phone";
import FormElement from "./component/FormElement";

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);
  

  return (
    <>
      <div className="xl:container mx-auto mb-32">
        <div
          className="flex justify-center"
          style={{
            background:
              "radial-gradient(circle,rgba(0,0,0,1) 40%, rgba(0,0,255,1) 100%)", 
            height: "250px",
          }}
        >
          <h1 className="text-5xl sm:text-7xl text-white uppercase pt-12">
            Contact
          </h1>
        </div>
        <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
          <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
            <div className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
              <IconInfo icon={<IconEmail />} text="contact@us" />
              <IconInfo icon={<IconPhone />} text="+123455" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="text"
                    label="Name"
                    placeholder="Enter name here..."
                    fieldRef={field}
                    hasError={errors.name?.type == "required"}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="text"
                    label="Email"
                    placeholder="Enter email here..."
                    fieldRef={field}
                    hasError={errors.email?.type == "required"}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="text"
                    label="Text"
                    placeholder="Enter message here..."
                    fieldRef={field}
                    hasError={errors.message?.type == "required"}
                  />
                )}
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800" 
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
