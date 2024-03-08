<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

<html>
    <body>
        <h2>Canasta</h2>
        <h3>Elementos con mas de 20 cantidades</h3>

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


                <!--Sort nos sirve para ordenar los elementos iterados
                hay cambios en el xml para colocar minusculas
            select nos inidia el elemento que se usara para ordenar
            order como deseamos ordenar si ascending o descending
            case-order si primero van als mayusculaso minusculas
                upper first  lower-first -->
            <xsl:sort select = "@IDProducto"  order="ascending"/>

            <!--if nos permite hacer test condicional con los contenidos
            de un nodo, aqui comparamos que el valor de cantidad sea mayor que 20-->

            <xsl:if test = "cantidad &lt;=20">

            
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
            </xsl:if>
           
        </xsl:for-each>

        </table>
    </body>
</html>

</xsl:template>
</xsl:stylesheet>
    