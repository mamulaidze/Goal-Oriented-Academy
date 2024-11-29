import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import {
  ArchiveBoxIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';

const menuItems = [
  { id: 1, label: 'Edit', icon: <PencilIcon className="h-5 w-5 text-gray-500" /> },
  { id: 2, label: 'Duplicate', icon: <Square2StackIcon className="h-5 w-5 text-gray-500" /> },
  { id: 3, label: 'Archive', icon: <ArchiveBoxIcon className="h-5 w-5 text-gray-500" /> },
  { id: 4, label: 'Delete', icon: <TrashIcon className="h-5 w-5 text-gray-500" /> },
];

export default function DropDown() {
  return (
    <div className="fixed top-24 w-52 text-right">
      <Menu as="div" className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white shadow-inner">
        <MenuButton className="flex items-center gap-2 focus:outline-none hover:bg-gray-700 rounded-md">
          Options
          <ChevronDownIcon className="h-5 w-5 fill-white/60" />
        </MenuButton>
        <MenuItems className="absolute right-0 mt-2 w-52 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menuItems.map((item) => (
            <MenuItem key={item.id}>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700`}
                >
                  {item.icon}
                  {item.label}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
