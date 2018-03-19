package controllers

import (
	"github.com/astaxie/beego"
)

// MainController ...
type MainController struct {
	beego.Controller
}

// Get ...
func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.html"
}
