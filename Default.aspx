<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .questionRow
        {
            padding: 0.1em;
            font-family: "Bookman Old Style";
            font-size: 28px;
            display: block;
            margin: 0.2em;
        }
        .questionNum
        {
            font-family: Batang;
            font-size: 10px;
            display: inline-block;
            width: 5em;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    
    <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" 
        onselectedindexchanged="DropDownList1_SelectedIndexChanged">
        <asp:ListItem>2A</asp:ListItem>
        <asp:ListItem>A</asp:ListItem>
        <asp:ListItem>B</asp:ListItem>
    </asp:DropDownList>
    <asp:TextBox ID="TextBox1" runat="server">1</asp:TextBox>
    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Prev" />
    <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="Next" />
    <asp:Panel ID="Panel1" runat="server">
    </asp:Panel>
    </form>
</body>
</html>
