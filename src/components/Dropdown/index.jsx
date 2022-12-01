import { Menu } from "@headlessui/react";
import {
  StyledDropdown,
  List,
  ListItem,
  Label,
  ToggleButton,
  Flag,
} from "./Dropdown.styles";
import { isEmpty } from "@/helpers/utils";
import { useState } from "react";
import { ChevronDown } from "../Icons";

const Dropdown = ({ languages, label }) => {
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  return (
    <StyledDropdown>
      <Menu as="div" className="menu">
        {({ open }) => (
          <>
            <Menu.Button>
            <Flag src={activeLanguage.flag} alt='flag'/>
              {activeLanguage.language}
              <ToggleButton open={open}>
                <ChevronDown />
              </ToggleButton>
            </Menu.Button>
            <Menu.Items>
              <List>
                {!isEmpty(languages) &&
                  languages.map((item) => (
                    <Menu.Item>
                      {({ active }) => (
                        <ListItem
                          active={active}
                          onClick={() => setActiveLanguage(item)}
                        >
                            <Flag src={item.flag} alt='flag'/>
                          <Label>{item.language}</Label>
                        </ListItem>
                      )}
                    </Menu.Item>
                  ))}
              </List>
            </Menu.Items>
          </>
        )}
      </Menu>
    </StyledDropdown>
  );
};

const DropdownItem = ({ props }) => {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
};

export default Dropdown;
