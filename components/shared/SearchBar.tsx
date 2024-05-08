import { FormEvent } from "react";
import { CustomButton } from "..";
import { SearchBarProps } from "@/types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const query = formData.get("query") as string;
    onSubmit(query);
  };

  return (
    <form className="my-8" onSubmit={handleSubmit}>
      <input type="text" className="rounded-full p-2 px-5" name="query" />
      <CustomButton
        title="Search"
        btnType="submit"
        containerStyles="text-white rounded-full py-2 bg-slate-700 mx-2 min-w-[130px]"
      />
    </form>
  );
};

export default SearchBar;
