import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

export default function PopoverExample() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <div className="flex gap-8">
        <div className="text-sm font-semibold text-white/50">Products</div>
        <Popover>
          <PopoverButton className="block text-sm font-semibold text-white/50 focus:outline-none hover:text-white focus:text-white">
            Solutions
          </PopoverButton>
          <PopoverPanel
            className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm leading-6 transition duration-200 ease-in-out transform data-[closed]:opacity-0 data-[closed]:translate-y-1"
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">Start integrating products and tools</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <div className="text-sm font-semibold text-white/50">Pricing</div>
      </div>
    </div>
  );
}
