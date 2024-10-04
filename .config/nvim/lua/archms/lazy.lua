local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
{"nvim-treesitter/nvim-treesitter", build = ":TSUpdate"},
{'nvim-telescope/telescope.nvim', tag = '0.1.6',
      dependencies = { 'nvim-lua/plenary.nvim' }},
{ "rose-pine/neovim", name = "rose-pine" },
{"ThePrimeagen/harpoon"},
{ "savq/melange-nvim" },
{ "catppuccin/nvim", name = "catppuccin", priority = 1000 },
{"jacoborus/tender"},
{ "bluz71/vim-moonfly-colors", name = "moonfly", lazy = false, priority = 1000 },
{ "blazkowolf/gruber-darker.nvim" },
--[[
{"neovim/nvim-lspconfig",
    dependencies = {
        "williamboman/mason.nvim",
        "williamboman/mason-lspconfig.nvim",
    };
      config = function()
        require("mason").setup()
        require("mason-lspconfig").setup({
            ensure_installed = {
                "lua_ls",
                "clangd",
                "bashls",
                "zls",
                "rust_analyzer"
	        },
            handlers = {
                function(server_name)
                    require("lspconfig")[server_name].setup {}
                end,
            }
        })
    end
},
--]]
}, {})

