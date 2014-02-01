using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page 
{
    List<Label> mylabels = new List<Label>();
    protected void Page_Load(object sender, EventArgs e)
    {
        redrawExercise();
    }
    void redrawExercise()
    {
        String exerciseCode = DropDownList1.SelectedValue;
        Exercise ex = new Exercise(exerciseCode, Int32.Parse(TextBox1.Text));
        mylabels.Clear();
        Panel1.Controls.Clear();
        int i;
        string q = "";
        for (i = 0; i < 12; i++)
        {
            q = ex.getQuestion(i);
            Label lb0 = new Label();
            lb0.Text = "(" + (i + 1) + ")";
            lb0.CssClass = "questionNum";
            Label lb = new Label();
            lb.Text = q;
            Panel pn = new Panel();
            pn.CssClass = "questionRow";
            pn.Controls.Add(lb0);
            pn.Controls.Add(lb);
            mylabels.Add(lb);
            mylabels.Add(lb0);            
            Panel1.Controls.Add(pn);
        }
    }
    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        redrawExercise();
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        TextBox1.Text = "" + (Int32.Parse(TextBox1.Text) + 1);
        redrawExercise();
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (TextBox1.Text == "1") return;
        TextBox1.Text = "" + (Int32.Parse(TextBox1.Text) - 1);
        redrawExercise();
    }
}
