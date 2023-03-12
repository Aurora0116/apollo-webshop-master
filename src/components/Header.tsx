import { Button } from "./Button";
import { CartIcon, UserIcon } from "./svgIcons";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="">
            <Button
              icon={<CartIcon color="#fff" />}
              size="small"
              title="0"
              className="mr-2"
            />
            <Button
              icon={<UserIcon color="#595959" />}
              size="small"
              variant="plain"
              title="My Account"
              titleClass="text-dark-gray"
            />
          </div>
          <div className=""></div>
          <div className="">
            {/* eslint-disable-next-line */}
            <img src="/image/logo@text.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
