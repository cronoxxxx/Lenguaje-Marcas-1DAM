<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/"> <!--xml association-->

        <html>
            <body>
                <h2>Canasta</h2>

                <table border="1">
                    <tr bgcolor="#a0a0ff">
                        <th>ID producto</th>
                        <th>Nombre</th>
                        <th>Origen</th>
                        <th>Cantidad</th>
                        <th>Costo</th>
                    </tr>

                    <!--Tenemos
                    un iterador for-each que recorrera cada alemento producto adentro de canasta 
         select determina el conjunto de nodos a ser iterados-->
                    <xsl:for-each select="canasta/producto">

                        <tr>
                            <td>
                                <xsl:value-of select="@IDProducto" />
                            </td>
                            <td>
                                <xsl:value-of select="nombre" />
                            </td>
                            <td>
                                <xsl:value-of select="origen" />
                            </td>
                            <td>
                                <xsl:value-of select="cantidad" />
                            </td>
                            <td>
                                <xsl:value-of select="costo" />
                            </td>
                        </tr>

                    </xsl:for-each>

                </table>
            </body>
        </html>


    </xsl:template>


</xsl:stylesheet>