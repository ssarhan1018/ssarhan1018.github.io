// External JavaScript File to Accompany TellMeMyGrade.html Page File.


        $(document).ready(function () {

            $("#btnEnter").click(function () {
                //Math Part
                $("#Feedback_Missing_Calc_1").html("You're missing Math& 151.");
                $("#Feedback_Missing_Calc_2").html("You're missing Math& 152.");
                $("#Feedback_QSR_Complete").html("You have completed QSR.");
                $("#Feedback_QSR_Incomplete").html("You have not yet fulfilled the QSR requirement.");

                $("#Feedback_Missing_Calc_1").hide();
                $("#Feedback_QSR_Incomplete").hide();
                $("#Feedback_Missing_Calc_2").hide();
                $("#Feedback_QSR_Complete").hide();


                if (!($("#math151Cal").is(':checked'))) {
                    $("#Feedback_Missing_Calc_1").show();
                    $("#Feedback_QSR_Incomplete").show();

                    if (!($("#math152Cal").is(':checked'))) {
                        $("#Feedback_Missing_Calc_2").show();
                    }
                }
                else {

                    if (($("#math152Cal").is(':checked'))) {
                        $("#Feedback_QSR_Complete").show();
                    }
                    else {
                        $("#Feedback_Missing_Calc_2").show();
                        $("#Feedback_QSR_Incomplete").show();
                    }
                }
-->


                //College Part
               
<!--
                $("#Feedback_ColSucc_Complete").html("You have fulfilled the 'College Success' requirement!");
                $("#Feedback_ColSucc_Incomplete").html("You're missing the 'College Success' requirement.");

                $("#Feedback_ColSucc_Complete").hide();
                $("#Feedback_ColSucc_Incomplete").hide();


                if (!($("#Col100").is(':checked'))) {
                    if (!($("#Col101").is(':checked'))) {
                        $("#Feedback_ColSucc_Incomplete").show();
                    }
                    else
                        $("#Feedback_ColSucc_Complete").show();
                }
                else {
                    if (($("#Col101").is(':checked'))) {
                        $("#Feedback_ColSucc_Complete").show();
                    }
                    else {
                        $("#Feedback_ColSucc_Incomplete").show();

                    }
                }


                //LAB Part

                $("#Feedback_Science_Complete").html("You have completed science.");
                $("#Feedback_Science_Incomplete").html("You're missing Science.");
                $("#Feedback_Science_No_Lab").html("You need at least one Lab.");
                $("#Feedback_Science_Missing_Second_Discipline").html("You're Missing_Second_Discipline. ");

                $("#Feedback_Science_Complete").hide();
                $("#Feedback_Science_Incomplete").hide();
                $("#Feedback_Science_No_Lab").hide();
                $("#Feedback_Science_Missing_Second_Discipline").hide();

                
                if (($("#p114Lab").is(':checked')) + ($("#p115Lab").is(':checked')) + ($("#p116Lab").is(':checked')) > 0) {
                    if (($("#Math146").is(':checked')) + ($("#Math163").is(':checked')) > 0) {
                        $("#Feedback_Science_Complete").show();
                    }
                    else {
                        if ($("#c161Lab").is(':checked')) {
                            $("#Feedback_Science_Complete").show();
                        }
                        else
                        {
                            $("#Feedback_Science_Incomplete").show();
                            $("#Feedback_Science_Missing_Second_Discipline").show();
                        }
                    }
                }
                else {
                    if (($("#c161Lab").is(':checked'))) {
                        if (($("#Math146").is(':checked')) + ($("#Math163").is(':checked')) > 0) {
                            $("#Feedback_Science_Complete").show();
                        }
                        else
                        {
                            $("#Feedback_Science_Incomplete").show();
                            $("#Feedback_Science_Missing_Second_Discipline").show();
                        }
                    }
                    else {
                        if (($("#Math146").is(':checked')) + ($("#Math163").is(':checked')) > 0) {
                            $("#Feedback_Science_Missing_Second_Discipline").show();
                        }
                        $("#Feedback_Science_Incomplete").show();
                        $("#Feedback_Science_No_Lab").show();

                    }

                }

               });

        });
    



